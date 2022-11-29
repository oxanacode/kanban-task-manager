import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import { FC } from 'react';

import styles from './ResultCard.module.css';

import { TaskType } from '../../store/slices/tasks/tasksApi';

type ResultCardPropsType = {
  task: TaskType;
  boardTitle: string;
  columnTitle: string;
};

export const ResultCard: FC<ResultCardPropsType> = ({ task, boardTitle, columnTitle }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        width: '100%',
      }}
    >
      <CardContent>
        <Typography level="h2" fontSize="lg">
          {task.title}
        </Typography>
        <Typography className={styles.overflow} sx={{ display: '-webkit-box' }}>
          {task.description}
        </Typography>
        <Typography level="body3">Board: {boardTitle}</Typography>
        <Typography level="body3">Column: {columnTitle}</Typography>
      </CardContent>
    </Card>
  );
};
