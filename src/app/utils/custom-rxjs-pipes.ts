import { filter } from 'rxjs/operators';

export const nonNull = () => filter((value: any) => value != null);
