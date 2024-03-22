export interface TopCardComponentProps {
    socialMedia: string
    username: string
    number: string
    image: string
    followers: string
    isUp: boolean
    change: string
  }

export interface BottomCardComponentProp {
  name: string
  number: string
  socialMedia: string
  change: string
  isUp: boolean
}

export interface TitleComponentProps {
  clickhandle : () => void
}

export interface SwitchComponentProps {
  clickhandle : () => void
  isHover : boolean
}