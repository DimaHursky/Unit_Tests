import { Resource } from 'i18next';
import BUTTONS_UI from './ua/buttons.json';
import PAGES_UI from './ua/pages.json';
import CRUD_UI from './ua/crud.json';
import SEARCH_UI from './ua/search.json';
import DROPZONE_UI from './ua/dropZone.json';

const resources: Resource = {
  ua: {
    translation: {
      ui: {
        buttons: BUTTONS_UI,
        pages: PAGES_UI,
        crud: CRUD_UI,
        search: SEARCH_UI,
        dropZone: DROPZONE_UI,
      },
    },
  },
};

export default resources;
