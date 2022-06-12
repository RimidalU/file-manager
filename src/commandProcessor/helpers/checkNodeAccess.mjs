import { access } from 'fs/promises';
import { constants } from 'node:fs';

export const checkNodeAccess = async (node) => {
    try {
        await access(node, constants.F_OK);
        return () => true
    } catch (error) {
        () => false
    }
};