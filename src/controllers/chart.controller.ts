import {authenticate} from '@loopback/authentication';
import {get, response} from '@loopback/rest';

export class ChartController {
  constructor() {}

  @get('/charts-countries')
  @response(200, {
    description: 'Array of Activity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: [],
        },
      },
    },
  })
  async find(): Promise<{}[]> {
    return [
      {
        country: 'Lithuania',
        litres: 501.9,
        bottles: 1500,
      },
      {
        country: 'Czech Republic',
        litres: 301.9,
        bottles: 990,
      },
      {
        country: 'Ireland',
        litres: 201.1,
        bottles: 785,
      },
      {
        country: 'Germany',
        litres: 165.8,
        bottles: 255,
      },
      {
        country: 'Australia',
        litres: 139.9,
        bottles: 452,
      },
      {
        country: 'Austria',
        litres: 128.3,
        bottles: 332,
      },
      {
        country: 'UK',
        litres: 99,
        bottles: 150,
      },
      {
        country: 'Belgium',
        litres: 60,
        bottles: 178,
      },
      {
        country: 'The Netherlands',
        litres: 50,
        bottles: 50,
      },
    ];
  }

  @get('/charts-categories')
  @response(200, {
    description: 'Array of Activity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: [],
        },
      },
    },
  })
  async findCategory(): Promise<{}[]> {
    return [
      {
        category: 'Lithuania',
        value: 501.9,
      },
      {
        category: 'Czechia',
        value: 301.9,
      },
      {
        category: 'Ireland',
        value: 201.1,
      },
      {
        category: 'Germany',
        value: 165.8,
      },
      {
        category: 'Australia',
        value: 139.9,
      },
      {
        category: 'Austria',
        value: 128.3,
      },
      {
        category: 'UK',
        value: 99,
      },
    ];
  }

  @get('/charts-countries1')
  @response(200, {
    description: 'Array of Activity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: [],
        },
      },
    },
  })
  async findCountry(): Promise<{}[]> {
    return [
      {
        country: 'USA',
        value: 2025,
      },
      {
        country: 'China',
        value: 1882,
      },
      {
        country: 'Japan',
        value: 1809,
      },
      {
        country: 'Germany',
        value: 1322,
      },
      {
        country: 'UK',
        value: 1122,
      },
      {
        country: 'France',
        value: 1114,
      },
      {
        country: 'India',
        value: 984,
      },
      {
        country: 'Spain',
        value: 711,
      },
      {
        country: 'Netherlands',
        value: 665,
      },
      {
        country: 'Russia',
        value: 580,
      },
      {
        country: 'South Korea',
        value: 443,
      },
      {
        country: 'Canada',
        value: 441,
      },
    ];
  }

  @get('/charts-bounds')
  @response(200, {
    description: 'Array of Activity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: [],
        },
      },
    },
  })
  @authenticate('jwt')
  async findBounds(): Promise<{}[]> {
    return [
      {
        title: 'Unsustainable',
        color: '#ee1f25',
        lowScore: -40,
        highScore: -20,
      },
      {
        title: 'Volatile',
        color: '#f04922',
        lowScore: -20,
        highScore: 0,
      },
      {
        title: 'Foundational',
        color: '#fdae19',
        lowScore: 0,
        highScore: 20,
      },
      {
        title: 'Developing',
        color: '#f3eb0c',
        lowScore: 20,
        highScore: 40,
      },
      {
        title: 'Maturing',
        color: '#b0d136',
        lowScore: 40,
        highScore: 60,
      },
      {
        title: 'Sustainable',
        color: '#54b947',
        lowScore: 60,
        highScore: 80,
      },
      {
        title: 'High Performing',
        color: '#0f9747',
        lowScore: 80,
        highScore: 100,
      },
    ];
  }

  @get('/charts-treemap')
  @response(200, {
    description: 'Array of Activity model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: [],
        },
      },
    },
  })
  @authenticate('jwt')
  async findTreeMap(): Promise<{}> {
    return {
      name: 'Root',
      children: [
        {
          name: 'First',
          children: [
            {
              name: 'A1',
              value: 100,
            },
            {
              name: 'A2',
              value: 60,
            },
            {
              name: 'A3',
              value: 30,
            },
          ],
        },
        {
          name: 'Second',
          children: [
            {
              name: 'B1',
              value: 135,
            },
            {
              name: 'B2',
              value: 98,
            },
            {
              name: 'B3',
              value: 56,
            },
          ],
        },
        {
          name: 'Third',
          children: [
            {
              name: 'C1',
              value: 335,
            },
            {
              name: 'C2',
              value: 148,
            },
            {
              name: 'C3',
              value: 126,
            },
            {
              name: 'C4',
              value: 26,
            },
          ],
        },
        {
          name: 'Fourth',
          children: [
            {
              name: 'D1',
              value: 415,
            },
            {
              name: 'D2',
              value: 148,
            },
            {
              name: 'D3',
              value: 89,
            },
            {
              name: 'D4',
              value: 64,
            },
            {
              name: 'D5',
              value: 16,
            },
          ],
        },
        {
          name: 'Fifth',
          children: [
            {
              name: 'E1',
              value: 687,
            },
            {
              name: 'E2',
              value: 148,
            },
          ],
        },
      ],
    };
  }
}
