export enum ViewType {
    // 混合
    Mixture,
    // 上下页
    Union,
}

export type PptInfo = {
    currentPage: number;
    totalPageCount: number;
    coursewareId: string;
    coursewareName: string;
    coursewarePath: string;
    pages: {
        pageIndex: number;
        pageNote: string;
        pageThumbnailUrl: string;
        pageHyperlinks?: PageHyperlink[];
    }[];
};
export interface PageHyperlink {
    index: number;
    address: string;
    screenTip: string;
    textToDisplay: string;
}
