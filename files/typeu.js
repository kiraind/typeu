const robot = require('/usr/lib/node_modules/robotjs')

robot.keyToggle('alt', 'up')
robot.keyToggle('shift', 'down')
robot.keyToggle('control', 'down')
robot.keyTap('u')
robot.keyToggle('shift', 'up')
robot.keyToggle('control', 'up')
robot.typeString(process.argv[2])
robot.keyTap('space')