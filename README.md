# To-Do List Application 
### Features 
- Add Task
- Remove Task
- Update Task
- Display Task 

### How to Contribute?
- Pull main branch 
- Branch out - create your own branch locally# To-Do List Application 
### Core Features 
- Add a task into a tasks list
- Remove a task from a tasks list
- Update a task task in the tasks list
- Display all added task into the screen

### How to Contribute?
Please note that the main branch has been locked for security. As a result you will have to follow these steps to get any changes to the main branch.
- Clone the remote repository using the `git clone https://github.com/MpumeleloNtobi/to-do-app.git` if you haven't done so already
- Sync local and remote main branches using the `git pull` command.
- Create a new branch:
    - Create and switch into a new branch using the `git checkout -b <new branch name>` command
    - Create then switch into a new branch using the `git branch <new branch name>` and `git checkout <new branch name>` commands respectively 
- At this point you are ready to get your fingers dirty - make changes to existing code, write new code, add new files, fix a bug etc.
- Stage changes:
    - Stage all the changes in the working directory `git add .` 
    - Stage all the changes in a specific file `git add <file name>` 
    - Stage some or all the changes in  specific file `git add -p <file name>` 
    - Stage some or all the changes in the working directory `git add -p` 
- Commit staged changes:
    - Commit all staged changes using the `git commit -m "<commit message>"`
    - Stage and commit in a single command using the `git commit -am "<commit message>"` - only works for tracked files (files which have been added previously using using the `git add` command)
- Push changes into an upstream feature branch using `git push --set-upstream origin <remote feature branch name>` or `git push -u origin <remote feature branch name>` command. This will create a new remote feature branch name <remote feature branch name> in the remote repository to push to. 
- In GitHub create a Pull Request and add at least one reviewer to propose changes from the feature branch into the main branch
- Wait for a reviews and approval of the proposed changes
- Once the proposed changes have been approved you can go ahead and merge the changes into the main branch 
- Should there be any merge conflicts please resolve wait for reviews and approvals and try again

### Naming Convention 
- Functions with verb 
    <verb>_<noun> eg. a function for adding tasks into an array Add_MyTasks()
- Variable 
    - lower case separeted by underscore for multiple words
    - eg. variable_name 

- Work on the branch -- make changes, write new features, add new files etc
- Push branch into github for review 
- Create pull request to merge your branch with the main branch 
- Get reviews and approval then merge 

### Naming Convention 
- Functions with verb 
    <verb>_<noun> eg. a function for adding tasks into an array Add_MyTasks()
- Variable 
    - lower case separeted by underscore for multiple words
    - eg. variable_name 
