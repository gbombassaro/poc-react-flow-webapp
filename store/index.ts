import ActionsPanel from '@/containers/actions-panel/reducer'
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import logger from 'redux-logger'

const logs_enabled = process.env.NEXT_PUBLIC_WEBAPP_REDUX_LOGS || '0'

export function makeStore() {
  return configureStore({
    reducer: {
      actionsPanel: ActionsPanel.reducer,
    },
    middleware: (getDefaultMiddlewares) => logs_enabled === '1' ? getDefaultMiddlewares().concat(logger) : getDefaultMiddlewares().concat()
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
