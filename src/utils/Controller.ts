import EventEmitter from 'events';
import { useEffect } from 'react';
import { useUpdate } from 'react-use';
import { WebSocketProxy } from './WebSocketProxy';
import { PageHyperlink, PptInfo } from '../types';

type ControllerOptions = { address: string };

enum ControllerEvent {
    Update = 'update',
}

export enum EControllerState {
    Loading,
    Fail,
    Success,
    End,
}

export class Controller {
    private ws: WebSocketProxy;
    private event: EventEmitter = new EventEmitter();
    private state = EControllerState.Loading;
    private pptInfo: PptInfo = null;
    private currPageNum: number = 1;
    private currThumb: string;

    init(options: ControllerOptions) {
        const { address } = options;
        this.ws = new WebSocketProxy(address);
        this.ws.onError(this.handleWSError);
        this.ws.onOpen(this.handleWSOpen);
    }

    useUpdate = () => {
        const update = useUpdate();
        useEffect(() => {
            const handler = () => {
                update();
            };
            this.event.addListener(ControllerEvent.Update, handler);
            return () => {
                this.event.removeListener(ControllerEvent.Update, handler);
            };
        }, []);
        const { state, pptInfo, currPageNum, currThumb } = this;
        return { state, pptInfo, currPageNum, currThumb };
    };

    handleWSError = () => {
        this.state = EControllerState.Fail;
        this.event.emit(ControllerEvent.Update);
    };
    handleWSOpen = () => {
        this.initPptInfo();
        this.initListen();
    };

    async initPptInfo() {
        this.ws.onMessage('/api/v1/ppt/info/result', (data) => {
            this.pptInfo = data;
            this.currPageNum = this.pptInfo.currentPage;
            this.state = EControllerState.Success;
            this.event.emit(ControllerEvent.Update);
        });
        this.ws.send('/api/v1/ppt/info/query', null);
    }
    async initListen() {
        this.ws.onMessage('/api/v1/ppt/page/info/change', (data) => {
            this.currPageNum = data.pageIndex;
            this.currThumb = data.pageThumbnailUrl;
            this.event.emit(ControllerEvent.Update);
        });
        this.ws.onMessage('/api/v1/ppt/playing/end', () => {
            this.state = EControllerState.End;
            this.event.emit(ControllerEvent.Update);
        });
    }
    prevPage() {
        this.ws.send('/api/v1/ppt/page/prev', null);
    }
    nextPage() {
        this.ws.send('/api/v1/ppt/page/next', null);
    }
    jumpPage(pageNumber: number) {
        this.ws.send('/api/v1/ppt/jumpPage', { pageNumber });
    }
    openLink(link: PageHyperlink) {
        const { index } = link;
        this.ws.send('/api/v1/ppt/hyperlink/open', {
            pageIndex: this.currPageNum,
            hyperlinkIndex: index,
        });
    }
    closeLink() {
        this.ws.send('/api/v1/ppt/playing/focus', null);
    }
    endPlay() {
        this.ws.send('/api/v1/ppt/playing/stop', null);
    }
}

export const controller = new Controller();
