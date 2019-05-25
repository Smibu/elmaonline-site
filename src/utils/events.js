import fs from 'fs';
import moment from 'moment';
import {
  discordChatline,
  discordBesttime,
  discordBestmultitime,
  discordBattlestart,
  discordBattlequeue,
  discordBattleresults,
  discordBattleEnd,
} from 'utils/discord';
import config from '../config';

const checkAuth = (req, res, callback) => {
  if (req.header('Authorization') === config.discord.apiAuth) {
    callback();
  } else {
    res.sendStatus(401);
  }
};

export function chatline(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/chatline/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordChatline(req.body);
  });
}

export function besttime(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/besttime/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordBesttime(req.body);
  });
}

export function bestmultitime(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/bestmultitime/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordBestmultitime(req.body);
  });
}

export function battlestart(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/battlestart/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordBattlestart(req.body);
  });
}

export function battlequeue(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/battlequeue/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordBattlequeue(req.body);
  });
}

export function battleend(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/battleend/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordBattleEnd(req.body);
  });
}

export function battleresults(req, res) {
  checkAuth(req, res, () => {
    fs.writeFile(
      `./events/battleresults/${moment().format('X')}.json`,
      JSON.stringify(req.body),
      e => {
        if (e) {
          res.json({ success: 0, error: e });
        } else {
          res.json({ success: 1 });
        }
      },
    );
    discordBattleresults(req.body);
  });
}
