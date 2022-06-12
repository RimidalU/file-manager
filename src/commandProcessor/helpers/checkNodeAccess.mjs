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

// export const checkNodeAccess = async (node) => {
//     let isAcccess = false
//     console.log(node);
//     access(node, constants.F_OK, function (error) {
//         if (error) {
//             isAcccess =  false;
//         } else {
//             isAcccess =  true;
//         }
//     });
//     return isAcccess
// };