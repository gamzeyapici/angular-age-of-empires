import {createAction, props} from '@ngrx/store';

export const selectAge = createAction('[Units Component] Select Age', props<{
    selectedAge?: string | null;
}>());

export const selectCost = createAction('[Units Component] Select Cost', props<{
  wood?: number | null;
  food?: number | null;
  gold?: number | null;
}>());
