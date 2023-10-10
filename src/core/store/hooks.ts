import {AppDispatch} from "./index";
import {IRootState} from "../reducers";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

export const useAppDispatch = () => {
    return useDispatch<AppDispatch>();
};

export const useAppStateSelector: TypedUseSelectorHook<IRootState> =
    useSelector;