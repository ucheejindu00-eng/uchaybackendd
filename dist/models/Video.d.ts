import mongoose, { Document } from "mongoose";
export interface IVideo extends Document {
    title: string;
    url: string;
    uploadedBy: string;
    createdAt: Date;
}
declare const _default: mongoose.Model<IVideo, {}, {}, {}, mongoose.Document<unknown, {}, IVideo, {}, {}> & IVideo & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export default _default;
//# sourceMappingURL=Video.d.ts.map