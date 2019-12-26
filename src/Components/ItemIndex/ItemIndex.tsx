import React from 'react'
import { createUseStyles } from 'react-jss'
import { useSelector } from '../../hooks'
import { selectItemIndex } from '../../Redux/selectors'
import { Link, Route, useRouteMatch, useHistory } from 'react-router-dom'
import ItemDetails from '../_shared/ItemDetails'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = createUseStyles((theme: Theme) => ({
  itemIndex: {
    display: 'grid',
    gridTemplateColumns: '33% auto',
    '& a': {
      textDecoration: 'none',
    }
  },
  list: {
    listStyleType: 'none'
  },
  listItem: {
    minHeight: '2rem',
    outline: '1px solid grey'
  }
}))

type Props = {

}

function ItemIndex({ }: Props) {
  const classes = useStyles()
  const items = useSelector(selectItemIndex)
  const match = useRouteMatch<{ item: string }>("/itemindex/:item")
  const history = useHistory()
  const selected = items.find(item => item.name === match?.params.item)

  function handleItemClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.persist()
    e.preventDefault()
    console.log(e)
    history.push(``)
  }

  return (
    <div className={classes.itemIndex}>
      <List>
        {
          items.map(item => (
            <ListItem component href={`/itemindex/${item.name}`} key={item.id} id={item.name} onClick={handleItemClick} >
              <ListItemText primary={item.name} />
            </ListItem>
          ))
        }
      </List>
      <Route path="/itemindex/:item">
        {selected &&
          <ItemDetails item={selected} />
        }
      </Route>
    </div>
  )
}

export default ItemIndex