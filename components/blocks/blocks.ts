import { Title } from './Title.component'
import type { IBlockManager } from '@utils/index'

export const blocks: IBlockManager[] = [
  {
    id: '1',
    name: 'Title',
    label: 'A title block',
    component: Title,
    props: [
      {
        name: 'text',
        title: 'Text',
        label: 'The content of your title',
        type: 'text'
      },
      {
        name: 'placement',
        title: 'Placement',
        type: 'select',
        options: ['left', 'center', 'right'],
        defaultOption: 'center'
      },
      {
        name: 'textColor',
        title: 'Text color',
        type: 'color'
      }
    ]
  }
]
