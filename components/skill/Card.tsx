import { Skill } from '../../types/skill';
import { roleColor } from '../../utils/RoleColor';
import Chip from '../uiParts/Chip';
import SkillIcon from './SkillIcon';

type Props = {
  skill: Skill;
};

const Card: React.VFC<Props> = ({ skill }) => {
  return (
    <div style={{ textAlign: 'center', maxWidth: '200px' }}>
      <SkillIcon skillName={skill.name} />
      <p>{skill.name}</p>
      <Chip title={skill.type} color={roleColor(skill.type)} />
      <p>{skill.level}</p>
    </div>
  );
};

export default Card;
