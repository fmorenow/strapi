module.exports={
    routes: [
        {
          "method": "POST",
          "path": "/check-completion",
          "handler": "retosjugador.checkCompletion",
          "config": {
            "policies": []
          }
        }
      ]
}