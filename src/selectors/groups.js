/* This file exports selectors for group list. All functions here accept a
 * list of groups as array */

export function getSectionHeads(groups) {
    return groups.filter(group => !group.isDepartment);
}

export function getSections(groups) {
    return groups.filter(group => group.isDepartment);
}
