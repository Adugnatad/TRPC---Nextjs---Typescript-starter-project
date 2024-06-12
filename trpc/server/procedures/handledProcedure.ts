import { procedure } from "../trpc";
import captureErrorsMiddleware from "../middlewares/captureErrorsMiddleware";

const handledProcedure = procedure.use(captureErrorsMiddleware);

export default handledProcedure;
