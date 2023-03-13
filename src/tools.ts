/**
 * Returns the nearest parent that is scrollable
 * @param node
 */
export function GetScrollParent(node:HTMLElement|null):HTMLElement|null {
    if (node == null) {
        return null;
    }

    if (node.scrollHeight > node.clientHeight) {
        return node;
    } else {
        return GetScrollParent(node.parentElement);
    }
}
