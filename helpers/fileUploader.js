const FTPClient = require("ftp");
const fs = require("fs");
const path = require("path");
const config = require("../_config");
const HOST = config.HOST;
const USER = config.USER;
const PASSWORD = config.PASSWORD;

const ftp_client = new FTPClient();

const ftpConfig = {
  host: `${HOST}`,
  port: 21,
  user: `${USER}`,
  password: `${PASSWORD}`,
};

exports.uploadFile = (fileName) => {
  const fullPath = path.join(__dirname, `../controllers/uploads`);
  const filePath = path.join(`${fullPath}`, `${fileName}`);
  const readStream = fs.createReadStream(filePath);

  ftp_client.on("ready", function () {
    // ftp_client.list(function (err, list) {
    // 	if (err) throw err;
    // 	console.dir(list);
    // 	ftp_client.end();
    // });

    ftp_client.put(
      readStream,
      `/testy/images/blog/${fileName}`,

      function (err) {
        if (err) {
          console.log("ERROR!!!", err);
          return err;
        } else {
          ftp_client.end();
          try {
            fs.unlinkSync(filePath);
          } catch (err) {
            console.error(err);
            return;
          }
        }

        const uploaded = true;
        return uploaded;
      }
    );
  });
  ftp_client.connect(ftpConfig);
};
