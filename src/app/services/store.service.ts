export class StoreService {
    public mode = 'light';
    public el = ['aa', 'bb'];

    setMode(newMode: string) {
        this.mode = newMode;
    }

    addEl() {
        this.el.push('');
    }
}
