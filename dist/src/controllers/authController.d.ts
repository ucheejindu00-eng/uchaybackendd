import { Request, Response } from "express";
export declare const registerAdmin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const loginAdmin: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAdmin: (req: Request, res: Response) => Promise<void>;
//# sourceMappingURL=authController.d.ts.map