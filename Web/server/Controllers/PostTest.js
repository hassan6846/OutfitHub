    exports.PostTest = (req, res) => {
        const userRequest = req.body;
        res.status(200).json({
          post: userRequest,
        });
      };
      