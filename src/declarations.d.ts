declare global {
  module '*.svg?react' {
    import React from 'react'
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    export default ReactComponent
  }
}

export {}