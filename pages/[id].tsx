import React from 'react'
import styled from 'styled-components'
import { GetServerSideProps } from 'next'

type ContainerProps = {
  className: string
}
type ComponentProps = {} & ContainerProps

const Component: React.FC<ComponentProps> = props => (
  <div className={props.className}>Component</div>
)

const StyledComponent = styled(Component)``

const Container: React.FC<ContainerProps> = props => {
  return <StyledComponent {...props} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  switch (context.params?.id) {
    case 'facebook_former_executive_learning_programming_guarantee_life_time_work':
      context.res.writeHead(302, {
        Location: '/articles/learning_programming'
      })
      context.res.end()
      break
    case 'the_hardest_working_man_on_Social_media_says_btob_is_much_more_sexy_than_btoc_on_sns':
      context.res.writeHead(302, {
        Location: '/articles/btob_is_much_more_sexy_than_btoc_on_sns'
      })
      context.res.end()
      break
    case 'marissa-mayer+':
      context.res.writeHead(302, {
        Location: '/articles/marissa-mayer'
      })
      context.res.end()
      break
    default:
      context.res.writeHead(302, {
        Location: `/articles/${context.params?.id}`
      })
      context.res.end()
      break
  }
  return {
    props: {}
  }
}

export default Container
