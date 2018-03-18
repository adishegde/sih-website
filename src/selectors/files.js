/* This file exports selectors for file list. All functions here accept a list
 * of files as array */

export function getFilesWithPriority(files, priority) {
    return files.filter(file => file.priority === priority);
}

export function getFilesSortedByTimeRecieved(files, priority) {
    return files.sort(
        (a, b) =>
            new Date(a.timeRecievedCurrentOwner) >
            new Date(b.timeRecievedCurrentOwner)
    );
}
