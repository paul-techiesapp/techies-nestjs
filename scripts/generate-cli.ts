import checkbox from '@inquirer/checkbox';
import { confirm, input } from '@inquirer/prompts';
import { camelCase, paramCase } from 'change-case';
import { execSync } from 'child_process';
import * as pluralize from 'pluralize';

const load = async () => {
  const inputName = await input({
    message: 'Enter module name',
    validate: (v) => !!v,
  });

  const name = camelCase(pluralize.singular(inputName));
  const kebabName = paramCase(inputName);

  const choices = await checkbox({
    message: 'Select files',
    choices: [
      { name: 'base', value: 'base', checked: true },
      { name: 'resolver', value: 'resolver' },
      { name: 'subscriber', value: 'subscriber' },
      { name: 'authorizer', value: 'authorizer' },
      { name: 'hook', value: 'hook' },
    ],
  });

  if (choices.includes('base')) {
    try {
      // check if module exists
      execSync(`ls src/modules/${kebabName}/${kebabName}.module.ts`).toString();
      // if no error, module exists
      const answer = await confirm({ message: 'The Module exists, Continue?' });
      if (!answer) return;
    } catch (e) {}

    execSync(`nest generate mo modules/${kebabName}`, { stdio: 'inherit' });
    execSync(`yarn hygen module base ${name}`, { stdio: 'inherit' });
  }

  if (choices.includes('resolver')) {
    execSync(`yarn hygen module resolver ${name}`, { stdio: 'inherit' });
  }

  if (choices.includes('subscriber')) {
    execSync(`yarn hygen module subscriber ${name}`, { stdio: 'inherit' });
  }

  if (choices.includes('authorizer')) {
    execSync(`yarn hygen module authorizer ${name}`, { stdio: 'inherit' });
  }

  if (choices.includes('hook')) {
    execSync(`yarn hygen module hook ${name}`, { stdio: 'inherit' });
  }

  // run eslint
  execSync(`prettier --write src/modules/${kebabName}`, { stdio: 'inherit' });
  execSync(`eslint src/modules/${kebabName} --fix`, { stdio: 'inherit' });
};

load();
