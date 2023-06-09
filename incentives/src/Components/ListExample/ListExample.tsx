import classes from './ListExample.module.scss';

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];

  function getImageUrl(person: any) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }

function ListExample()
{
    const listItems = people.map(person =>
        <li className={classes.myList} key={person.id}>
            <img
            src={getImageUrl(person)}
            alt={person.name}
            />
            <p>
            <b style={{ color: 'blue'}}>{person.name}:</b>
            {' ' + person.profession + ' '}
            known for {person.accomplishment}
            </p>
        </li>
        )

      return (
        <>
             <article>
                <h1>Scientists</h1>
                <ul>{listItems}</ul>
            </article>
        </>
      );
}

export default ListExample;