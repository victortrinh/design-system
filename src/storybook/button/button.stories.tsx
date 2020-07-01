import React from 'react'
import { AnimatedButton } from '../../components/button/animated-button'

export default { title: 'Button' }

export const withText = () => <AnimatedButton>Hello Button</AnimatedButton>

export const withEmoji = () => (
  <>
    <AnimatedButton />
    <span role='img' aria-label='so cool'>
      😀 😎 👍 💯
    </span>
  </>
)
