import React from 'react'
import { Switch, Route } from 'react-router-dom'

import GlobalFeed from './globalFeed'
import Article from './article'
import Authentication from './authentication'
import TagFeed from './tagFeed'
import YourFeed from './yourFeed'

export default () => {
    return (
        <Switch>
            <Route path="/" component={ GlobalFeed } exact />
            <Route path="/feed" component={ YourFeed } />
            <Route path="/tags/:slug" component={ TagFeed } />
            <Route path="/login" component={ Authentication } />
            <Route path="/register" component={ Authentication } />
            <Route path="/articles/:slug" component={ Article } />
        </Switch>
    )
}
