/* This file exports selectors for group list. All functions here accept a
 * list of groups as array */

export function getNonDepartments(groups) {
    return groups.filter(group => !group.isDepartment);
}

export function getDepartments(groups) {
    return groups.filter(group => group.isDepartment);
}
