import {
  library,
  IconDefinition,
  IconPack
} from '@fortawesome/fontawesome-svg-core';

import * as icons from './Icons';

type IconDefinitionOrPack = IconDefinition | IconPack;

library.add(icons as IconDefinitionOrPack);
