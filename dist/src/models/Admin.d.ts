import mongoose, { Document } from "mongoose";
export interface IAdmin extends Document {
    email: string;
    password: string;
}
declare const _default: mongoose.Model<IAdmin, {}, {}, {}, mongoose.Document<unknown, {}, IAdmin, {}, {}> & IAdmin & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Admin.d.ts.map