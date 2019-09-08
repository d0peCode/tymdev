export class SelectedAppService {
    selectedApp: number = 1;

    changeSelected(data: number) {
        this.selectedApp = data;
    }
}
