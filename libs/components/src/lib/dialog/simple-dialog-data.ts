export interface DialogData {
    title?: string;
    content?: any;
    cancelButton?: {
        show: boolean,
        label: string,
        icon?: string,
        value: any,
    };
    okButton?: {
        show: boolean,
        label: string,
        icon?: string,
        value: any
    };
    config?: DialogComponentConfig;
}

interface DialogComponentConfig {
    disableClose?: boolean;
    maxWidth?: number | string;
    minWidth?: number | string;
    maxHeight?: number | string;
    minHeight?: number | string;
}
