import * as React from 'react'
import Avatar from '../../components/common/avatar'

export default ({ entry }) => (
  <Avatar avatar={entry.getIn(['data', 'avatar'])} />
)