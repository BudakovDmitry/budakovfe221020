import { createRoot } from 'react-dom/client'
import App from 'src/app'
import store from 'src/redux/store'
import { Provider } from 'react-redux'

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
