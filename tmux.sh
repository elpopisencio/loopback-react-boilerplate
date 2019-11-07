#!/bin/bash
SESSION=boilerplate

tmux -2 new-session -d -s $SESSION

# Setup a window for tailing log files
tmux new-window -t $SESSION:1 -n 'frontend'
tmux send-keys "cd ./client && npm start" C-m
tmux new-window -t $SESSION:2 -n 'backend'
tmux send-keys "npx nodemon index.js" C-m

# echo alias boilerplate="cd $PWD && ./tmux.sh" >> ~/.zshrc
