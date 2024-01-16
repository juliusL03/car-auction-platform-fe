import {isEmpty, isEqual, xorWith} from 'lodash'

export const isArrayEqual = (x: unknown[], y: unknown[]) => isEmpty(xorWith(x, y, isEqual))
