import { v4 as uuidv4 } from 'uuid';
import { fromEvent, Observable, empty, race, Subject, merge } from 'rxjs';
import { publish, map, filter, tap, refCount, mapTo, take, publishLast } from 'rxjs/operators';

export class WebSocketProxy {
    private client: WebSocket;
    private ob$: Record<string, Observable<any>> = {};
    socket$: Observable<any>;
    subject: Subject<any> = new Subject();

    constructor(address: string) {
        this.client = new WebSocket(address);
        this.socket$ = merge(this.subject, fromEvent<any>(this.client, 'message')).pipe(
            map((e) => {
                return JSON.parse(e.data as string);
            }),
            publish(),
            refCount()
        );
    }

    get$(method: string) {
        if (this.ob$[method]) {
            return this.ob$[method] as Observable<any>;
        }
        this.ob$[method] = (this.socket$ as any as Observable<any>).pipe(
            filter((item) => {
                // if (id) {
                //     return item.method === channel && item.trace_id === id;
                // }
                return item.method === method;
            }),
            publish(),
            refCount()
        );
        return this.ob$[method] as Observable<any>;
    }

    onMessage(method: string, cb: (...args: any[]) => void) {
        this.client.addEventListener('message', (event) => {
            const result = JSON.parse(event.data as string);
            if (result.method === method) {
                cb(result.data);
            }
        });
    }

    onOpen(cb: (...args: any[]) => void) {
        this.client.addEventListener('open', cb);
    }

    onError(cb: (...args: any[]) => void) {
        this.client.addEventListener('error', cb);
    }

    send(method: string, data: any) {
        const temp = { method, traceId: uuidv4(), data };
        this.client.send(JSON.stringify(temp));
    }
}
