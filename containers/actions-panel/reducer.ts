import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface InitialStateProps {
  data: {
    id: string;
    name: string;
  },
  status: 'idle' | 'loading' | 'failed';
}

const initialState: InitialStateProps = {
  data: {
    id: '',
    name: '',
  },
  status: 'idle',
}

const CustomReducer = createSlice({
  name: 'actionsPanel',
  initialState: initialState,
  reducers: {
    clear: (state) => {
      state = {
        ...initialState
      }
    },
    setNodeActions: (state, action: PayloadAction<{
      id: string;
      name: string;
    }>) => {
      state.data = {
        id: action.payload.id,
        name: action.payload.name,
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
