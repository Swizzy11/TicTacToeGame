import { ComponentType } from "react"
import { Game } from "../pages/Game"
import { EndGame } from "../pages/EndGame"
import { StartGame } from "../pages/StartGame"

interface IRoute {
    /**
     * Идентификатор роута
     */
    id: string | number
    /**
     * Адрес страницы
     */
    path: string
    /**
     * Компонент страницы
     */
    component: ComponentType
    /**
     * Страница доступна только авторизованному пользователю
     */
    isPrivate: boolean
  }


  export const routes: IRoute[] = [
    {
      id: 'game',
      path: '/game',
      component: Game,
      isPrivate: true,
    },
    {
      id: 'start',
      path: '/start',
      component: StartGame,
      isPrivate: true,
    },
    {
      id: 'end',
      path: '/end',
      component: EndGame,
      isPrivate: true,
    }
  ]
