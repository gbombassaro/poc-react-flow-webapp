import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface InitialStateProps {
  data: {
    label: string;
    value: string | number;
  },
  status: 'idle' | 'loading' | 'failed';
}

const initialState: InitialStateProps = {
  data: {
    label: '',
    value: '',
  },
  status: 'idle',
}

const CustomReducer = createSlice({
  name: 'flow',
  initialState: initialState,
  reducers: {
    clear: (state) => {
      state = initialState
    },
    setNodeActions: (state, action: PayloadAction<any>) => {
      state.data = {
        label: action.payload.label,
        value: action.payload.value
      }
    },
  },
  extraReducers: (builder) => {
    builder
    // actionSearch
    // .addCase(actionSearch.pending, (state) => {
    //   state.list.items = []
    //   state.list.status = 'loading'
    // })
    // .addCase(actionSearch.fulfilled, (state, action) => {
    //   state.list.items = action.payload?.data || []
    //   state.list.pagination.total = action.payload?.total_documents || 0
    //   state.list.status = 'idle'
    // })
    // .addCase(actionSearch.rejected, (state) => {
    //   state.list.status = 'failed'
    // })
  },
})

export const {
  clear,
  setNodeActions,
} = CustomReducer.actions

export default CustomReducer
