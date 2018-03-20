/* This file exports selectors for file list. All functions here accept a list
 * of files as array */

export function getFilesWithPriority(files, priority) {
    if (priority === "all") return files;
    return files.filter(file => file.priority === priority);
}

export function getFilesSortedByTimeRecieved(files, priority) {
    return files.sort(
        (a, b) =>
            new Date(a.timeRecievedCurrentOwner) >
            new Date(b.timeRecievedCurrentOwner)
    );
}

export function getFilesByName(files, name) {
    if (!name) return files;

    const re = new RegExp(name);
    return files.filter(file => re.test(file.name));
}
