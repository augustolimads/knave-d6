import { useEffect, useState } from 'react'
import Head from 'next/head'
import race from '../utils/race.json'
import details from '../utils/details.json'
import equip from '../utils/equip.json'
import { random, shuffle } from 'lodash'
import { generatorByRate, rollList, rollMin } from '../utils/generator'

export default function Home() {
  const [raceState, setRaceState] = useState('...')
  const [origin, setOrigin] = useState('...')
  const [person, setPerson] = useState('...')
  const [defect, setDefect] = useState('...')
  const [gender, setGender] = useState('...')
  const [hair, setHair] = useState('...')
  const [mark, setMark] = useState('...')
  const [look, setLook] = useState('...')
  const [body, setBody] = useState('...')
  const [attr, setAttr] = useState({
    fort: 0,
    ref: 0,
    von: 0,
    int: 0,
    pv: 0,
    silver: 0
  })
  const [equipState, setEquipState] = useState({
    armor: '...',
    extra: '...',
    muWeapon: '...'
  })

  function handleClick() {
    setRaceState(generatorByRate(race))
    setOrigin(shuffle(details.origem)[0])
    setPerson(shuffle(details.personalidade)[0])
    setDefect(shuffle(details.defeito)[0])
    setGender(shuffle(details.sexo)[0])
    setHair(shuffle(details.cabelo)[0])
    setMark(shuffle(details.marca)[0])
    setLook(shuffle(details.olhar)[0])
    setBody(shuffle(details.corpo)[0])
    setAttr({
      fort: rollMin(3),
      ref: rollMin(3),
      von: rollMin(3),
      int: rollMin(3),
      pv: random(2, 6),
      silver: random(1, 6)
    })
    setEquipState({
      armor: generatorByRate(equip.armadura),
      extra: generatorByRate(equip.extra),
      muWeapon: shuffle(equip.muWeapon)[0]
    })
  }

  useEffect(() => {
    console.log(rollMin(2))
  }, [])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-3">
      <Head>
        <title>Criar um novo personagem</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="shadow-md p-8 rounded-b bg-white xs:w-full md:max-w-min">
        <button
          onClick={handleClick}
          className="w-full py-3 px-4 bg-gray-300 rounded-full text-white hover:bg-gray-400 transition"
        >
          Novo personagem
				</button>
        <div className="mt-3">
          <table className='table'>
            <tr>
              <td>Raça</td>
              <td>{raceState}</td>
            </tr>
            <tr>
              <td>Origem</td>
              <td>{origin}</td>
            </tr>
          </table>
          <hr className='my-2' />
          <div className='flex justify-between space-x-1'>
            <table className='table'>
              <tr>
                <td>Fortitude</td>
                <td>{attr.fort}</td>
              </tr>
              <tr>
                <td>Reflexos</td>
                <td>{attr.ref}</td>
              </tr>
              <tr>
                <td>Vontade</td>
                <td>{attr.von}</td>
              </tr>
              <tr>
                <td>Intelecto</td>
                <td>{attr.int}</td>
              </tr>
            </table>
            <table className='table'>
              <tr>
                <td>PV</td>
                <td>{attr.pv}</td>
              </tr>
              <tr>
                <td>Carga</td>
                <td>{attr.fort + 10}</td>
              </tr>
              <tr>
                <td>Pratas</td>
                <td>{attr.silver}</td>
              </tr>
              <tr>
                <td>Comida</td>
                <td>2</td>
              </tr>
            </table>
          </div>
          <hr className='my-2' />
          <div className='flex justify-center space-x-2'>
            <ul className='text-center'>
              <li className='font-bold'>KNAVE</li>
              <li>{equipState.armor}</li>
              <li>{equipState.extra}</li>
              <li>arma à escolha</li>
            </ul>
            <span>ou</span>
            <ul className='text-center'>
              <li className='font-bold'>Magic-user</li>
              <li>3 magias</li>
              <li>{equipState.muWeapon}</li>
            </ul>
          </div>
          <hr className='my-2' />
          <table className='table'>
            <tr>
              <td>Gênero</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>Personalidade</td>
              <td>{person}</td>
            </tr>
            <tr>
              <td>Defeito</td>
              <td>{defect}</td>
            </tr>
            <tr>
              <td>Cabelo</td>
              <td>{hair}</td>
            </tr>
            <tr>
              <td>Marca</td>
              <td>{mark}</td>
            </tr>
            <tr>
              <td>Olhar</td>
              <td>{look}</td>
            </tr>
            <tr>
              <td>Corpo</td>
              <td>{body}</td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}
