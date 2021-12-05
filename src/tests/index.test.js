import ReactDOM from "react-dom";
import { mock } from "jest";
import { renderToDOM } from "../index";
import { Provider } from 'react-redux';
import store from '../redux/store';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe("test ReactDOM.render", () => {
  const originalRender = ReactDOM.render;
  const originalGetElement = global.document.getElementById('container-root');
  const root = document.createElement('div');
  beforeEach(() => {
    document.body.appendChild(root);
    const content = (
        <Provider store={store}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
        </Provider>
    );

    ReactDOM.render(
        content,
        root
    );
});
  beforeEach(() => {
    global.document.getElementById = () => true;
    ReactDOM.render = jest.fn();
  });
  afterAll(() => {
    global.document.getElementById = originalGetElement;
    ReactDOM.render = originalRender;
  });
  it("should call ReactDOM.render", () => {
    ReactDOM.render();
    expect(ReactDOM.render).toHaveBeenCalled();
  });
});
