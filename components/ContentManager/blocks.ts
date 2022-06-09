import { Title } from '../blocks/Title.component'

const PROP_TYPES = {
  TEXT: 'text',
  LONG_TEXT: 'longText',
  SELECT: 'select',
  COLOR: 'color'
}

export const blocks = [
  {
    id: '1',
    name: 'Title',
    label: 'A title block',
    component: Title,
    props: [
      {
        name: 'Text',
        label: 'The content of your title',
        type: PROP_TYPES.TEXT
      },
      {
        name: 'Placement',
        type: PROP_TYPES.SELECT,
        options: ['left', 'center', 'right'],
        defaultOption: 'center'
      }
    ]
  }
]
