import { msg } from '../helloWorld/message';
import formatResponse from '../common/formatResponse';

export const handler = (event, context, callback) => callback(null, formatResponse(msg, event));
