import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://bigfootfinance.io/#/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://bigfootfinance.io/#/pools',
  },
  {
    label: 'Bush',
    icon: 'BushIcon',
    href: 'https://bigfootfinance.io/#/bush',
  },
  // {
  //   label: 'Certik Audit (In-Progress)',
  //   icon: 'ShieldIcon', // ShieldIcon
  //   href: 'https://twitter.com/bigfootfinance/status/1367218225310818308',
  //   target: '_blank',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x70219E2c64F32517d4271f74445757BF7eC91AD2',
        target: '_blank',
      },
      // {
      //   label: 'Token',
      //   href: 'https://doc.bigfootfinance.io/tokennomics/bigfoot-token',
      //   target: '_blank',
      // },
      // {
      //   label: 'Contracts',
      //   href: 'https://doc.bigfootfinance.io/security/contracts',
      //   target: '_blank',
      // },
      // {
      //   label: 'Transparency',
      //   href: 'https://doc.bigfootfinance.io/transparency/transparency',
      //   target: '_blank',
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/bigfoottoken',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/bigfoottoken/',
      // },
    ],
  },
  // {
  //   label: 'IFO',
  //   icon: 'IfoIcon',
  //   href: '/ifo',
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/BigFootFinance',
        target: '_blank',
      },
      // {
      //   label: 'Docs',
      //   href: 'https://doc.bigfootfinance.io/',
      //   target: '_blank',
      // },
      {
        label: 'Blog',
        href: 'https://bigfootfinance.medium.com/',
        target: '_blank',
      },
      {
        label: 'Announcements',
        href: 'https://t.me/bigfootfinance',
        target: '_blank',
      },
      {
        label: 'Telegram',
        href: 'https://t.me/bigfootfinancechat',
        target: '_blank',
      },
    ],
  },
]

export default config
