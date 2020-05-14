import { topmost } from 'tns-core-modules/ui/frame';
import { ActionItem } from 'tns-core-modules/ui/action-bar';

declare var UIBarStyle: any;

// tslint:disable-next-line:no-namespace
export namespace ActionBarUtil {
    export function setTitle(title: string) {
        const actionBar = topmost().currentPage.actionBar;
        actionBar.title = title;
    }
    export function addButton(button: ActionItem) {
        topmost().currentPage.actionBar.actionItems.addItem(button);
    }
    export function emptyActionBarItems() {
        const actionBar = topmost().currentPage.actionBar;
        const actionItems = actionBar.actionItems.getItems();
        actionItems.forEach((item) => {
            actionBar.actionItems.removeItem(item);
        });
    }
    export function customizeStatusBar() {
        if (topmost().ios) {
            const navigationBar = topmost().ios.controller.navigationBar;
            navigationBar.barStyle = UIBarStyle.UIBarStyleBlack;
        }
    }
}
