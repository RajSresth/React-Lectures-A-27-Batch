export const task1 = (req, res, next) => {
  console.log("Task-1..!");
  next();
};

export const task2 = (req, res, next) => {
  console.log("Task-2");
  const user = false;
  res.status(200).send("Task-2 Task-2 task-2");
};
